import React, { useState, useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import * as S from "./Analysis.styled";
import Calendar from "../../components/Calendar/Calendar";
import VerticalBarChart from "../../components/VerticalBarChart/VerticalBarChart";
import {
  PageTitle,
  FloatingButtonContainer,
  FloatingButton,
} from "../../components/styles/shared.styled";
import { getTransactionsByPeriod } from "../../services/transactions";
import { AuthContext } from "../../context/AuthContext";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import {
  categoryMapping,
  categoryOrder,
  monthNamesGenitive,
} from "../../utils/constants";
import { formatDateForApi, formatDateFull } from "../../utils/dateUtils";

const Analysis = () => {
  const { token } = useContext(AuthContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const isDesktop = useMediaQuery("(min-width: 496px)");
  const showCalendar = !isDesktop && searchParams.get("view") === "calendar";
  const showChart = !isDesktop && !showCalendar;

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [tempStartDate, setTempStartDate] = useState(null);
  const [tempEndDate, setTempEndDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState({ total: 0, categories: [] });

  useEffect(() => {
    if (!token || !startDate) return;
    const loadTransactions = async () => {
      setLoading(true);
      try {
        const start = formatDateForApi(startDate);
        const end = endDate ? formatDateForApi(endDate) : start;
        const data = await getTransactionsByPeriod(start, end);
        processChartData(data);
      } catch (error) {
        console.error("Ошибка загрузки данных за период:", error);
      } finally {
        setLoading(false);
      }
    };
    loadTransactions();
  }, [token, startDate, endDate]);

  const processChartData = (txs) => {
    const totals = {};
    let totalSum = 0;
    txs.forEach((tx) => {
      totals[tx.category] = (totals[tx.category] || 0) + tx.sum;
      totalSum += tx.sum;
    });
    const categoriesArray = categoryOrder.map((catKey) => ({
      name: categoryMapping[catKey]?.name || catKey,
      amount: totals[catKey] || 0,
      color: categoryMapping[catKey]?.color || "#CCCCCC",
    }));
    setChartData({ total: totalSum, categories: categoriesArray });
  };

  const getPeriodLabel = () => {
    if (!startDate) return "";
    if (!endDate || startDate === endDate)
      return formatDateFull(startDate, monthNamesGenitive);
    return `${formatDateFull(startDate, monthNamesGenitive)} — ${formatDateFull(endDate, monthNamesGenitive)}`;
  };

  const applyPeriod = () => {
    if (tempStartDate && tempEndDate) {
      setStartDate(tempStartDate);
      setEndDate(tempEndDate);
      setSearchParams({});
      setTempStartDate(null);
      setTempEndDate(null);
    }
  };

  const closeCalendar = () => {
    setSearchParams({});
    setTempStartDate(null);
    setTempEndDate(null);
  };

  const handleDesktopRangeChange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  const handleTempRangeChange = (start, end) => {
    setTempStartDate(start);
    setTempEndDate(end);
  };

  return (
    <S.AnalysisWrapper>
      <div className="container">
        <PageTitle>Анализ расходов</PageTitle>

        {isDesktop && (
          <S.AnalysisBlock>
            <S.AnalysisCalendar>
              <Calendar
                startDate={startDate}
                endDate={endDate}
                onRangeChange={handleDesktopRangeChange}
              />
            </S.AnalysisCalendar>
            <S.AnalysisGraph>
              {loading ? (
                <div>Загрузка...</div>
              ) : (
                <VerticalBarChart
                  total={chartData.total}
                  dateLabel={getPeriodLabel()}
                  categories={chartData.categories}
                />
              )}
            </S.AnalysisGraph>
          </S.AnalysisBlock>
        )}

        {!isDesktop && showChart && (
          <>
            <S.AnalysisGraph>
              {loading ? (
                <div>Загрузка...</div>
              ) : (
                <VerticalBarChart
                  total={chartData.total}
                  dateLabel={getPeriodLabel()}
                  categories={chartData.categories}
                  showTitle
                />
              )}
            </S.AnalysisGraph>
            <FloatingButtonContainer>
              <FloatingButton
                onClick={() => setSearchParams({ view: "calendar" })}
              >
                Выбрать другой период
              </FloatingButton>
            </FloatingButtonContainer>
          </>
        )}

        {!isDesktop && showCalendar && (
          <>
            <S.MobileBackButton onClick={closeCalendar}>
              <img src="/images/Arrow-left.svg" alt="Назад" />
              Анализ расходов
            </S.MobileBackButton>
            <Calendar
              startDate={tempStartDate}
              endDate={tempEndDate}
              onRangeChange={handleTempRangeChange}
              title="Выбор периода"
            />
            {tempStartDate && tempEndDate && (
              <FloatingButtonContainer>
                <FloatingButton onClick={applyPeriod}>
                  Выбрать период
                </FloatingButton>
              </FloatingButtonContainer>
            )}
          </>
        )}
      </div>
    </S.AnalysisWrapper>
  );
};

export default Analysis;
