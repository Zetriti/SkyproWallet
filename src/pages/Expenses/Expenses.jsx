import React, { useState, useEffect, useContext, useRef } from "react";
import * as S from "./Expenses.styled";
import {
  PageTitle,
  Input as BaseInput,
  Button as BaseButton,
} from "../../components/styles/shared.styled";
import styled from "styled-components";
import {
  getTransactions,
  addTransaction,
  deleteTransaction,
} from "../../services/transactions";
import { AuthContext } from "../../context/AuthContext";
import { useSearchParams } from "react-router-dom";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import {
  formatDateForDisplay,
  formatDateForApi as formatDateForApiUtil,
} from "../../utils/dateUtils";

const StyledInput = styled(BaseInput)`
  margin-bottom: 24px;
`;

const AddButton = styled(BaseButton)`
  margin: 0;
`;

const categoriesList = [
  { key: "food", name: "Еда", icon: "/images/Del_deep.svg" },
  { key: "transport", name: "Транспорт", icon: "/images/Car.svg" },
  { key: "housing", name: "Жильё", icon: "/images/House.svg" },
  { key: "joy", name: "Развлечения", icon: "/images/Phone.svg" },
  { key: "education", name: "Образование", icon: "/images/Educat.svg" },
  { key: "others", name: "Другое", icon: "/images/Other.svg" },
];

const Expenses = () => {
  const formatDate = formatDateForDisplay;
  const formatDateForApi = formatDateForApiUtil;

  const { token } = useContext(AuthContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const isDesktop = useMediaQuery("(min-width: 451px)");
  const formRef = useRef(null);
  const mobileMode = searchParams.get("view") || "expenses";
  const showTable = isDesktop || mobileMode === "expenses";
  const showForm = isDesktop || mobileMode === "new";

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    description: "",
    category: "",
    date: "",
    sum: "",
  });
  const [errors, setErrors] = useState({});
  const [selectedExpenseId, setSelectedExpenseId] = useState(null);

  useEffect(() => {
    if (token) fetchTransactions();
  }, [token]);

  const fetchTransactions = async () => {
    setLoading(true);
    try {
      const data = await getTransactions();
      setTransactions(data);
    } catch (error) {
      console.error("Ошибка загрузки:", error);
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.description.trim() || formData.description.length < 4)
      newErrors.description = "Минимум 4 символа";
    if (!formData.category) newErrors.category = "Выберите категорию";
    if (!formData.sum || Number(formData.sum) <= 0)
      newErrors.sum = "Сумма должна быть больше 0";
    if (!formData.date) {
      newErrors.date = "Укажите дату";
    } else {
      const regex = /^(\d{2})\.(\d{2})\.(\d{4})$/;
      if (!regex.test(formData.date)) {
        newErrors.date = "Формат: дд.мм.гггг";
      } else {
        const [day, month, year] = formData.date.split(".");
        const dateObj = new Date(`${year}-${month}-${day}`);
        if (dateObj.getMonth() + 1 != month || dateObj.getDate() != day) {
          newErrors.date = "Несуществующая дата";
        }
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!validateForm()) return;

    const payload = {
      description: formData.description,
      sum: Number(formData.sum),
      category: formData.category,
      date: formatDateForApi(formData.date),
    };

    await addTransaction(payload);
    await fetchTransactions();
    setFormData({ description: "", category: "", date: "", sum: "" });
  };

  const handleFloatingSubmit = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true }),
      );
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Удалить расход?")) {
      try {
        await deleteTransaction(id);
        await fetchTransactions();
      } catch (error) {
        console.error("Ошибка удаления:", error);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleCategoryClick = (categoryKey) => {
    setFormData((prev) => ({ ...prev, category: categoryKey }));
    if (errors.category) setErrors((prev) => ({ ...prev, category: "" }));
  };

  const handleSelectExpense = (id) => {
    if (isDesktop) return;
    setSelectedExpenseId(id === selectedExpenseId ? null : id);
  };

  return (
    <S.ExpensesWrapper>
      <div className="container">
        <PageTitle>Мои расходы</PageTitle>
        <S.ExpensesBlock>
          {showTable && (
            <S.ExpenseTable>
              <S.TableTitle>
                {!isDesktop ? "Мои расходы" : "Таблица расходов"}
                {!isDesktop && showTable && (
                  <S.MobileAddButton
                    onClick={() => setSearchParams({ view: "new" })}
                  >
                    <img src="/images/Plus.svg" alt="+" />
                    Новый расход
                  </S.MobileAddButton>
                )}
              </S.TableTitle>

              <S.Table>
                <S.ColumnName>
                  <S.TableHeader style={{ width: 141 }}>Описание</S.TableHeader>
                  <S.TableHeader style={{ width: 141 }}>
                    Категория
                  </S.TableHeader>
                  <S.TableHeader style={{ width: 142 }}>Дата</S.TableHeader>
                  <S.TableHeader style={{ width: 134 }}>Сумма</S.TableHeader>
                  <S.TableHeaderMobyleLeft>
                    <S.TableHeaderMobyle>Описание</S.TableHeaderMobyle>
                    <S.TableHeaderMobyle>Категория</S.TableHeaderMobyle>
                  </S.TableHeaderMobyleLeft>
                  <S.TableHeaderMobyleRight>
                    <S.TableHeaderMobyle>Дата</S.TableHeaderMobyle>
                    <S.TableHeaderMobyle>Сумма</S.TableHeaderMobyle>
                  </S.TableHeaderMobyleRight>
                </S.ColumnName>
                <S.ColumnBody>
                  {loading && <div>Загрузка...</div>}
                  {transactions.map((tx) => (
                    <S.TableRow
                      key={tx._id}
                      onClick={() => handleSelectExpense(tx._id)}
                      $isSelected={!isDesktop && selectedExpenseId === tx._id}
                    >
                      <S.TableCell style={{ width: 141 }}>
                        {tx.description}
                      </S.TableCell>
                      <S.TableCell style={{ width: 141 }}>
                        {categoriesList.find((c) => c.key === tx.category)
                          ?.name || tx.category}
                      </S.TableCell>
                      <S.TableCell style={{ width: 142 }}>
                        {formatDate(tx.date)}
                      </S.TableCell>
                      <S.TableCell style={{ width: 158 }}>
                        {tx.sum.toLocaleString()} ₽
                      </S.TableCell>
                      <S.TableCellMobileLeft>
                        <S.TableCellMobile>{tx.description}</S.TableCellMobile>
                        <S.TableCellMobile>
                          {categoriesList.find((c) => c.key === tx.category)
                            ?.name || tx.category}
                        </S.TableCellMobile>
                      </S.TableCellMobileLeft>
                      <S.TableCellMobileRight>
                        <S.TableCellMobile>
                          {formatDate(tx.date)}
                        </S.TableCellMobile>
                        <S.TableCellMobile>
                          {tx.sum.toLocaleString()} ₽
                        </S.TableCellMobile>
                      </S.TableCellMobileRight>
                      <S.TableCell>
                        <S.ActionButton onClick={() => handleDelete(tx._id)}>
                          <img src="/images/Del.svg" alt="Удалить" />
                        </S.ActionButton>
                      </S.TableCell>
                    </S.TableRow>
                  ))}
                </S.ColumnBody>
              </S.Table>
            </S.ExpenseTable>
          )}

          {showForm && (
            <S.NewExpense>
              {!isDesktop && (
                <S.MobileBackButton
                  onClick={() => setSearchParams({ view: "expenses" })}
                >
                  <img src="/images/Arrow-left.svg" alt="Назад" />
                  Мои расходы
                </S.MobileBackButton>
              )}
              <S.NewExpenseTitle>Новый расход</S.NewExpenseTitle>
              <form ref={formRef} onSubmit={handleSubmit}>
                <S.SmallHeadline>
                  Описание{" "}
                  {errors.description && (
                    <S.ErrorAsteriskHeader>
                      {" "}
                      * {errors.description}
                    </S.ErrorAsteriskHeader>
                  )}
                </S.SmallHeadline>
                <StyledInput
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Введите описание"
                  $error={!!errors.description}
                />

                <S.SmallHeadline>
                  Категория{" "}
                  {errors.category && (
                    <S.ErrorAsteriskHeader>
                      {" "}
                      * {errors.category}
                    </S.ErrorAsteriskHeader>
                  )}
                </S.SmallHeadline>
                <S.Categories>
                  {categoriesList.map((cat) => (
                    <S.CategoriesName
                      key={cat.key}
                      type="button"
                      onClick={() => handleCategoryClick(cat.key)}
                      $isActive={formData.category === cat.key}
                    >
                      <img
                        style={{ position: "absolute", top: 8.5, left: 20 }}
                        src={cat.icon}
                        alt={cat.name}
                      />
                      <p>{cat.name}</p>
                    </S.CategoriesName>
                  ))}
                </S.Categories>

                <S.SmallHeadline>
                  Дата{" "}
                  {errors.date && (
                    <S.ErrorAsteriskHeader>
                      {" "}
                      * {errors.date}
                    </S.ErrorAsteriskHeader>
                  )}
                </S.SmallHeadline>
                <StyledInput
                  name="date"
                  type="text"
                  placeholder="дд.мм.гггг"
                  value={formData.date}
                  onChange={handleInputChange}
                  $error={!!errors.date}
                />

                <S.SmallHeadline>
                  Сумма{" "}
                  {errors.sum && (
                    <S.ErrorAsteriskHeader>
                      {" "}
                      * {errors.sum}
                    </S.ErrorAsteriskHeader>
                  )}
                </S.SmallHeadline>
                <StyledInput
                  name="sum"
                  type="number"
                  placeholder="Введите сумму"
                  value={formData.sum}
                  onChange={handleInputChange}
                  $error={!!errors.sum}
                />

                {isDesktop && (
                  <AddButton type="submit">Добавить новый расход</AddButton>
                )}
              </form>
            </S.NewExpense>
          )}
        </S.ExpensesBlock>

        {/* Плавающая кнопка добавления для мобильных */}
        {!isDesktop && showForm && (
          <S.AddExpenseButtonContainer>
            <S.AddExpenseButton onClick={handleFloatingSubmit}>
              Добавить новый расход
            </S.AddExpenseButton>
          </S.AddExpenseButtonContainer>
        )}

        {/* Плавающая кнопка удаления для мобильных */}
        {!isDesktop && selectedExpenseId && (
          <S.DeleteExpenseButtonContainer>
            <S.DeleteExpenseButton
              onClick={() => {
                handleDelete(selectedExpenseId);
                setSelectedExpenseId(null);
              }}
            >
              Удалить расход
            </S.DeleteExpenseButton>
          </S.DeleteExpenseButtonContainer>
        )}
      </div>
    </S.ExpensesWrapper>
  );
};

export default Expenses;
