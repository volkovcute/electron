const addUserBtn = document.getElementById('addUserBtn');
const userForm = document.getElementById('userForm');
const saveUserBtn = document.getElementById('saveUserBtn');
const cancelBtn = document.getElementById('cancelBtn');
const usersTable = document.getElementById('usersTable').getElementsByTagName('tbody')[0];

let users = [];

function toggleUserForm() {
    userForm.classList.toggle('hidden');
}

function addUserToTable(user) {
    const row = usersTable.insertRow();
    row.insertCell(0).textContent = user.name;
    row.insertCell(1).textContent = user.age;
    row.insertCell(2).textContent = user.email;
}

addUserBtn.addEventListener('click', () => {
    toggleUserForm();
});

cancelBtn.addEventListener('click', () => {
    toggleUserForm();
});

saveUserBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    if (name && age && email) {
        const newUser = { name, age, email };
        users.push(newUser);
        addUserToTable(newUser);

        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
        document.getElementById('email').value = '';
        toggleUserForm();
    } else {
        alert('Пожалуйста, заполните все поля');
    }
});
