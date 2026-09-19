const STORAGE_KEY = "budgetTrackerExpenses";

const expenseForm = document.getElementById("expenseForm");
const formTitle = document.getElementById("formTitle");
const submitExpenseBtn = document.getElementById("submitExpenseBtn");
const cancelEditBtn = document.getElementById("cancelEditBtn");
const expenseTableBody = document.getElementById("expenseTableBody");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const dateFilter = document.getElementById("dateFilter");
const sortSelect = document.getElementById("sortSelect");
const emptyAddExpenseBtn = document.getElementById("emptyAddExpenseBtn");

const totalExpenseValue = document.getElementById("totalExpenseValue");
const transactionValue = document.getElementById("transactionValue");
const highestExpenseValue = document.getElementById("highestExpenseValue");
const averageExpenseValue = document.getElementById("averageExpenseValue");
const mostUsedCategory = document.getElementById("mostUsedCategory");
const miniTotalSpent = document.getElementById("miniTotalSpent");
const miniAverageSpent = document.getElementById("miniAverageSpent");

let expenses = [];
let editId = null;

const sampleExpenses = [
  {
    id: 1,
    date: "2026-09-01",
    description: "College Books",
    category: "Education",
    amount: 1200,
    paymentMethod: "UPI",
  },
  {
    id: 2,
    date: "2026-09-05",
    description: "Groceries",
    category: "Food",
    amount: 850,
    paymentMethod: "Cash",
  },
  {
    id: 3,
    date: "2026-09-09",
    description: "Bus Pass",
    category: "Travel",
    amount: 500,
    paymentMethod: "UPI",
  },
  {
    id: 4,
    date: "2026-09-11",
    description: "Movie Tickets",
    category: "Entertainment",
    amount: 420,
    paymentMethod: "Debit Card",
  },
];

function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number(value) || 0);
}

function formatDate(dateString) {
  const date = new Date(dateString + "T00:00:00");
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

function setError(fieldId, message) {
  const field = document.getElementById(fieldId);
  if (!field) return;

  field.classList.add("is-invalid");
  const feedback = field.parentElement.querySelector(".invalid-feedback");
  if (feedback) {
    feedback.textContent = message;
  }
}

function clearErrors() {
  const fields = expenseForm.querySelectorAll(".form-control, .form-select");
  fields.forEach((field) => {
    field.classList.remove("is-invalid");
  });
}

function saveExpenses() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
}

function loadExpenses() {
  const storedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (Array.isArray(storedData) && storedData.length > 0) {
    expenses = storedData;
  } else {
    expenses = [...sampleExpenses];
    saveExpenses();
  }
}

function getNewId() {
  if (expenses.length === 0) {
    return 1;
  }

  let maxId = 0;
  expenses.forEach((item) => {
    if (Number(item.id) > maxId) {
      maxId = Number(item.id);
    }
  });

  return maxId + 1;
}

function clearForm() {
  expenseForm.reset();
  editId = null;
  formTitle.textContent = "Add Expense";
  submitExpenseBtn.textContent = "Add Expense";
  cancelEditBtn.classList.add("d-none");
  clearErrors();
}

function showEditForm(expense) {
  editId = expense.id;
  document.getElementById("expenseDate").value = expense.date;
  document.getElementById("expenseDescription").value = expense.description;
  document.getElementById("expenseCategory").value = expense.category;
  document.getElementById("expenseAmount").value = expense.amount;
  document.getElementById("expensePayment").value = expense.paymentMethod;

  formTitle.textContent = "Edit Expense";
  submitExpenseBtn.textContent = "Update Expense";
  cancelEditBtn.classList.remove("d-none");
  clearErrors();

  document.getElementById("expenseFormSection").scrollIntoView({ behavior: "smooth" });
}

function validateForm() {
  clearErrors();

  const date = document.getElementById("expenseDate").value.trim();
  const description = document.getElementById("expenseDescription").value.trim();
  const category = document.getElementById("expenseCategory").value;
  const amount = document.getElementById("expenseAmount").value.trim();
  const payment = document.getElementById("expensePayment").value;

  let valid = true;

  if (!date) {
    setError("expenseDate", "Please enter a date.");
    valid = false;
  }

  if (!description) {
    setError("expenseDescription", "Please enter an expense description.");
    valid = false;
  }

  if (!category) {
    setError("expenseCategory", "Please select a category.");
    valid = false;
  }

  if (!amount) {
    setError("expenseAmount", "Please enter an expense amount.");
    valid = false;
  } else {
    const amountValue = Number(amount);
    if (amountValue <= 0 || Number.isNaN(amountValue)) {
      setError("expenseAmount", "Amount must be greater than zero.");
      valid = false;
    }
  }

  if (!payment) {
    setError("expensePayment", "Please select a payment method.");
    valid = false;
  }

  return valid;
}

function addExpense() {
  if (!validateForm()) {
    return;
  }

  const newExpense = {
    id: getNewId(),
    date: document.getElementById("expenseDate").value,
    description: document.getElementById("expenseDescription").value.trim(),
    category: document.getElementById("expenseCategory").value,
    amount: Number(document.getElementById("expenseAmount").value),
    paymentMethod: document.getElementById("expensePayment").value,
  };

  expenses.push(newExpense);
  saveExpenses();
  clearForm();
  renderAll();
}

function updateExpense() {
  if (!validateForm()) {
    return;
  }

  const itemIndex = expenses.findIndex((item) => item.id === editId);
  if (itemIndex === -1) {
    return;
  }

  expenses[itemIndex] = {
    id: editId,
    date: document.getElementById("expenseDate").value,
    description: document.getElementById("expenseDescription").value.trim(),
    category: document.getElementById("expenseCategory").value,
    amount: Number(document.getElementById("expenseAmount").value),
    paymentMethod: document.getElementById("expensePayment").value,
  };

  saveExpenses();
  clearForm();
  renderAll();
}

function editExpense(id) {
  const selectedExpense = expenses.find((item) => item.id === id);
  if (!selectedExpense) return;

  showEditForm(selectedExpense);
}

function deleteExpense(id) {
  const itemToDelete = expenses.find((item) => item.id === id);
  if (!itemToDelete) return;

  const check = window.confirm("Are you sure you want to delete this expense?\n\n" + itemToDelete.description);
  if (!check) {
    return;
  }

  expenses = expenses.filter((item) => item.id !== id);
  saveExpenses();

  if (editId === id) {
    clearForm();
  }

  renderAll();
}

function isDateMatch(dateString, filterValue) {
  if (!dateString || filterValue === "all") {
    return true;
  }

  const selectedDate = new Date(dateString + "T00:00:00");
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (filterValue === "today") {
    return selectedDate.toDateString() === today.toDateString();
  }

  if (filterValue === "week") {
    const diff = (today.getTime() - selectedDate.getTime()) / (1000 * 60 * 60 * 24);
    return diff >= 0 && diff <= 6;
  }

  if (filterValue === "month") {
    return (
      selectedDate.getFullYear() === today.getFullYear() &&
      selectedDate.getMonth() === today.getMonth()
    );
  }

  return true;
}

function sortExpenses(list) {
  const copy = [...list];
  const value = sortSelect.value;

  if (value === "oldest") {
    copy.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (value === "amountLow") {
    copy.sort((a, b) => Number(a.amount) - Number(b.amount));
  } else if (value === "amountHigh") {
    copy.sort((a, b) => Number(b.amount) - Number(a.amount));
  } else if (value === "descAZ") {
    copy.sort((a, b) => a.description.localeCompare(b.description));
  } else if (value === "descZA") {
    copy.sort((a, b) => b.description.localeCompare(a.description));
  } else {
    copy.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  return copy;
}

function getFilteredExpenses() {
  const searchText = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const dateRange = dateFilter.value;

  let result = [...expenses];

  if (searchText) {
    result = result.filter((item) => {
      const descriptionMatch = item.description.toLowerCase().includes(searchText);
      const categoryMatch = item.category.toLowerCase().includes(searchText);
      const paymentMatch = item.paymentMethod.toLowerCase().includes(searchText);
      return descriptionMatch || categoryMatch || paymentMatch;
    });
  }

  if (category !== "All") {
    result = result.filter((item) => item.category === category);
  }

  if (dateRange !== "all") {
    result = result.filter((item) => isDateMatch(item.date, dateRange));
  }

  return sortExpenses(result);
}

function calculateTotal(list) {
  return list.reduce((sum, item) => sum + Number(item.amount || 0), 0);
}

function calculateStats(list) {
  const total = calculateTotal(list);
  const count = list.length;
  const highest = count > 0 ? Math.max(...list.map((item) => Number(item.amount || 0))) : 0;
  const average = count > 0 ? total / count : 0;

  const categoryCount = {};
  list.forEach((item) => {
    categoryCount[item.category] = (categoryCount[item.category] || 0) + 1;
  });

  let mostUsed = "N/A";
  let highestCount = 0;

  Object.keys(categoryCount).forEach((category) => {
    if (categoryCount[category] > highestCount) {
      highestCount = categoryCount[category];
      mostUsed = category;
    }
  });

  return {
    total: total,
    count: count,
    highest: highest,
    average: average,
    mostUsed: mostUsed,
  };
}

function updateDashboard() {
  const stats = calculateStats(expenses);

  totalExpenseValue.textContent = formatCurrency(stats.total);
  transactionValue.textContent = stats.count;
  highestExpenseValue.textContent = formatCurrency(stats.highest);
  averageExpenseValue.textContent = formatCurrency(stats.average);
  miniTotalSpent.textContent = formatCurrency(stats.total);
  miniAverageSpent.textContent = formatCurrency(stats.average);
  mostUsedCategory.textContent = "Most Used Category: " + stats.mostUsed;
}

function displayExpenses() {
  const visibleExpenses = getFilteredExpenses();

  if (visibleExpenses.length === 0) {
    emptyState.classList.remove("d-none");
    expenseTableBody.innerHTML = "";
    return;
  }

  emptyState.classList.add("d-none");

  expenseTableBody.innerHTML = visibleExpenses
    .map(
      (item) => `
        <tr>
          <td>${formatDate(item.date)}</td>
          <td>${item.description}</td>
          <td><span class="badge-category">${item.category}</span></td>
          <td>${item.paymentMethod}</td>
          <td>${formatCurrency(item.amount)}</td>
          <td>
            <button class="btn btn-warning btn-action text-white me-2" type="button" data-action="edit" data-id="${item.id}">
              Edit
            </button>
            <button class="btn btn-danger btn-action" type="button" data-action="delete" data-id="${item.id}">
              Delete
            </button>
          </td>
        </tr>
      `
    )
    .join("");
}

function renderAll() {
  updateDashboard();
  displayExpenses();
}

expenseForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (editId !== null) {
    updateExpense();
  } else {
    addExpense();
  }
});

expenseTableBody.addEventListener("click", function (event) {
  const button = event.target.closest("button");
  if (!button) return;

  const action = button.dataset.action;
  const id = Number(button.dataset.id);

  if (action === "edit") {
    editExpense(id);
  }

  if (action === "delete") {
    deleteExpense(id);
  }
});

searchInput.addEventListener("input", renderAll);
categoryFilter.addEventListener("change", renderAll);
dateFilter.addEventListener("change", renderAll);
sortSelect.addEventListener("change", renderAll);
emptyAddExpenseBtn.addEventListener("click", function () {
  document.getElementById("expenseFormSection").scrollIntoView({ behavior: "smooth" });
  clearForm();
  document.getElementById("expenseDescription").focus();
});
cancelEditBtn.addEventListener("click", clearForm);

function initializeApp() {
  loadExpenses();
  renderAll();
}

initializeApp();
