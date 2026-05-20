// src/pages/Analysis/Analysis.jsx
import React, { useState, useEffect, useContext } from "react";
import * as S from "./Analysis.styled";
import Calendar from "../../components/Calendar/Calendar";
import VerticalBarChart from "../../components/VerticalBarChart/VerticalBarChart";
import { PageTitle } from "../../components/styles/shared.styled";
import { getTransactionsByPeriod } from "../../servives/transactions";
import { AuthContext } from "../../context/AuthContext";

const categoryMapping = {
  food: { name: "Еда", color: "#D9B6FF" },
  transport: { name: "Транспорт", color: "#FFB53D" },
  housing: { name: "Жильё", color: "#6EE4FE" },
  joy: { name: "Развлечения", color: "#B0AEFF" },
  education: { name: "Образование", color: "#BCEC30" },
  others: { name: "Другое", color: "#FFB9B8" },
};

const formatDateForApi = (dateStr) => {
  if (!dateStr) return null;
  const [day, month, year] = dateStr.split(".");
  return `${parseInt(month, 10)}-${parseInt(day, 10)}-${2000 + parseInt(year, 10)}`;
};

const Analysis = () => {
  const { token } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState({ total: 0, categories: [] });

  useEffect(() => {
    const loadTransactions = async () => {
      if (!token || !startDate) return;
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
      const cat = tx.category;
      totals[cat] = (totals[cat] || 0) + tx.sum;
      totalSum += tx.sum;
    });

    const categoryOrder = [
      "food",
      "transport",
      "housing",
      "joy",
      "education",
      "others",
    ];

    const categoriesArray = categoryOrder
      .filter((catKey) => totals[catKey] !== undefined)
      .map((catKey) => ({
        name: categoryMapping[catKey]?.name || catKey,
        amount: totals[catKey],
        color: categoryMapping[catKey]?.color || "#CCCCCC",
      }));

    setChartData({ total: totalSum, categories: categoriesArray });
  };

  const getPeriodLabel = () => {
    if (!startDate) return "";

    const monthNames = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];

    const formatFullDate = (dateStr) => {
      const [day, month, year] = dateStr.split(".");
      return `${parseInt(day, 10)} ${monthNames[parseInt(month, 10) - 1]} ${2000 + parseInt(year, 10)}`;
    };

    if (!endDate || startDate === endDate) {
      return formatFullDate(startDate);
    } else {
      return `${formatFullDate(startDate)} — ${formatFullDate(endDate)}`;
    }
  };

  const handleRangeChange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <S.AnalysisWrapper>
      <div className="container">
        <PageTitle>Анализ расходов</PageTitle>
        <S.AnalysisBlock>
          <S.AnalysisCalendar>
            <Calendar
              startDate={startDate}
              endDate={endDate}
              onRangeChange={handleRangeChange}
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
      </div>
    </S.AnalysisWrapper>
  );
};

export default Analysis;
