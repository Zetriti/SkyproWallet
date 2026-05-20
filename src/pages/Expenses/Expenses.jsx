// src/pages/Expenses/Expenses.jsx
import React, { useState, useEffect, useContext } from "react";
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
} from "../../servives/transactions";
import { AuthContext } from "../../context/AuthContext";

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
  const { token } = useContext(AuthContext);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    description: "",
    category: "food",
    date: "",
    sum: "",
  });
  const [errors, setErrors] = useState({});

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

  const formatDateForApi = (dateStr) => {
    const [day, month, year] = dateStr.split(".");
    return `${month}-${day}-${year}`;
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.description.trim() || formData.description.length < 4)
      newErrors.description = "Минимум 4 символа";
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
    e.preventDefault();
    if (!validateForm()) return;

    const payload = {
      description: formData.description,
      sum: Number(formData.sum),
      category: formData.category,
      date: formatDateForApi(formData.date),
    };

    await addTransaction(payload);
    await fetchTransactions();
    setFormData({ description: "", category: "food", date: "", sum: "" });
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
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().slice(-2);
    return `${day}.${month}.${year}`;
  };

  return (
    <S.ExpensesWrapper>
      <div className="container">
        <PageTitle>Мои расходы</PageTitle>
        <S.ExpensesBlock>
          {/* Таблица расходов */}
          <S.ExpenseTable>
            <S.TableTitle>Таблица расходов</S.TableTitle>
            <S.Table>
              <S.ColumnName>
                <S.TableHeader style={{ width: 141 }}>Описание</S.TableHeader>
                <S.TableHeader style={{ width: 141 }}>Категория</S.TableHeader>
                <S.TableHeader style={{ width: 142 }}>Дата</S.TableHeader>
                <S.TableHeader style={{ width: 134 }}>Сумма</S.TableHeader>
              </S.ColumnName>
              <S.ColumnBody>
                {loading && <div>Загрузка...</div>}
                {transactions.map((tx) => (
                  <S.TableRow key={tx._id}>
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

          {/* Форма добавления */}
          <S.NewExpense>
            <S.NewExpenseTitle>Новый расход</S.NewExpenseTitle>
            <form onSubmit={handleSubmit}>
              <S.SmallHeadline>Описание</S.SmallHeadline>
              <StyledInput
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Введите описание"
                $error={!!errors.description}
              />
              {errors.description && (
                <span style={{ color: "red", fontSize: 12 }}>
                  {errors.description}
                </span>
              )}

              <S.SmallHeadline>Категория</S.SmallHeadline>
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

              <S.SmallHeadline>Дата</S.SmallHeadline>
              <StyledInput
                name="date"
                type="text"
                placeholder="дд.мм.гггг"
                value={formData.date}
                onChange={handleInputChange}
                $error={!!errors.date}
              />
              {errors.date && (
                <span style={{ color: "red", fontSize: 12 }}>
                  {errors.date}
                </span>
              )}

              <S.SmallHeadline>Сумма</S.SmallHeadline>
              <StyledInput
                name="sum"
                type="number"
                placeholder="Введите сумму"
                value={formData.sum}
                onChange={handleInputChange}
                $error={!!errors.sum}
              />
              {errors.sum && (
                <span style={{ color: "red", fontSize: 12 }}>{errors.sum}</span>
              )}

              <AddButton type="submit">Добавить новый расход</AddButton>
            </form>
          </S.NewExpense>
        </S.ExpensesBlock>
      </div>
    </S.ExpensesWrapper>
  );
};

export default Expenses;
