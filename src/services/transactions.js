import api from "./api";

export const getTransactions = async (params = {}) => {
  const { data } = await api.get("/transactions", { params });
  return data;
};

export const addTransaction = async (transaction) => {
  const { data } = await api.post("/transactions", transaction, {
    headers: { "Content-Type": "" },
  });
  return data;
};

export const deleteTransaction = async (id) => {
  const { data } = await api.delete(`/transactions/${id}`);
  return data;
};

export const getTransactionsByPeriod = async (start, end) => {
  const response = await api.post(
    "/transactions/period",
    { start, end },
    {
      headers: { "Content-Type": "" },
    },
  );

  return response.data;
};
