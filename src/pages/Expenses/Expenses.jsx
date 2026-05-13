import React from "react";
import * as S from "./Expenses.styled";

const Expenses = () => {
  return (
    <S.ExpensesWrapper>
      <div className="container">
        <S.ExpensesTitle>
          <h4>Мои расходы</h4>
        </S.ExpensesTitle>

        <S.ExpensesBlock>
          <S.ExpenseTable>
            <S.TableTitle>
              <p>Таблица расходов</p>
            </S.TableTitle>
            <S.Table>
              <S.ColumnName>
                <S.TableHeader style={{ width: 141 }}>Описание</S.TableHeader>
                <S.TableHeader style={{ width: 141 }}>Категория</S.TableHeader>
                <S.TableHeader style={{ width: 142 }}>Дата</S.TableHeader>
                <S.TableHeader style={{ width: 134 }}>Сумма</S.TableHeader>
              </S.ColumnName>
              <S.ColumnBody>
                <S.TableRow>
                  <S.TableCell style={{ width: 141 }}>Пятерочка</S.TableCell>
                  <S.TableCell style={{ width: 141 }}>Еда</S.TableCell>
                  <S.TableCell style={{ width: 142 }}>03.07.2024</S.TableCell>
                  <S.TableCell style={{ width: 158 }}>3 500 ₽</S.TableCell>
                  <S.TableCell>
                    <S.ActionButton>
                      <img src="/images/Del.svg" alt="Del" />
                    </S.ActionButton>
                  </S.TableCell>
                </S.TableRow>
                <S.TableRow>
                  <S.TableCell style={{ width: 141 }}>Пятерочка</S.TableCell>
                  <S.TableCell style={{ width: 141 }}>Еда</S.TableCell>
                  <S.TableCell style={{ width: 142 }}>03.07.2024</S.TableCell>
                  <S.TableCell style={{ width: 158 }}>3 500 ₽</S.TableCell>
                  <S.TableCell>
                    <S.ActionButton>
                      <img src="/images/Del.svg" alt="Del" />
                    </S.ActionButton>
                  </S.TableCell>
                </S.TableRow>
              </S.ColumnBody>
            </S.Table>
          </S.ExpenseTable>
          <S.NewExpense>
            <S.NewExpenseTitle>
              <p>Новый расход</p>
            </S.NewExpenseTitle>
            <S.SmallHeadline>
              <p>Описание</p>
            </S.SmallHeadline>
            <S.DescriptionInput placeholder="Введите описание"></S.DescriptionInput>
            <S.SmallHeadline>
              <p>Категория</p>
            </S.SmallHeadline>
            <S.Categories>
              <S.CategoriesName>
                <img
                  style={{ position: "absolute", top: 8.5, left: 20 }}
                  src="/images/Del_deep.svg"
                  alt="Del"
                />
                <p>Еда</p>
              </S.CategoriesName>
              <S.CategoriesName>
                <img
                  style={{ position: "absolute", top: 8.5, left: 20 }}
                  src="/images/Car.svg"
                  alt="Del"
                />
                <p>Транспорт</p>
              </S.CategoriesName>
              <S.CategoriesName>
                <img
                  style={{ position: "absolute", top: 8.5, left: 20 }}
                  src="/images/House.svg"
                  alt="Del"
                />
                <p>Жильё</p>
              </S.CategoriesName>
              <S.CategoriesName>
                <img
                  style={{ position: "absolute", top: 8.5, left: 20 }}
                  src="/images/Phone.svg"
                  alt="Del"
                />
                <p>Развлечения</p>
              </S.CategoriesName>
              <S.CategoriesName>
                <img
                  style={{ position: "absolute", top: 8.5, left: 20 }}
                  src="/images/Educat.svg"
                  alt="Del"
                />
                <p>Образование</p>
              </S.CategoriesName>
              <S.CategoriesName>
                <img
                  style={{ position: "absolute", top: 8.5, left: 20 }}
                  src="/images/Other.svg"
                  alt="Del"
                />
                <p>Другое</p>
              </S.CategoriesName>
            </S.Categories>
            <S.SmallHeadline>
              <p>Дата</p>
            </S.SmallHeadline>
            <S.DataInput placeholder="Введите дату"></S.DataInput>
            <S.SmallHeadline>
              <p>Сумма</p>
            </S.SmallHeadline>
            <S.SumInput placeholder="Введите сумму"></S.SumInput>
            <S.AddButton>Добавить новый расход</S.AddButton>
          </S.NewExpense>
        </S.ExpensesBlock>
      </div>
    </S.ExpensesWrapper>
  );
};

export default Expenses;
