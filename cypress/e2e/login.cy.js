describe('Проверка авторизации', function () {

	 it('Верный логин и верный пароль', function () {
		cy.visit('https://login.qa.studio/'); // Зашли на сайт
		cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки "Вос. пароль"


		cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
		cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
		cy.get('#loginButton').click(); // Нажал "Войти"
		cy.wait(5000); // Ждем 5 сек


		cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авт. вижу текст
		cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
		cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
	 })

	 it('Верный логин и неверный пароль', function () {
		cy.visit('https://login.qa.studio/'); // Зашли на сайт
		cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки "Вос. пароль"


		cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
		cy.get('#pass').type('iLoveqastudio8'); // Ввели неверный пароль
		cy.get('#loginButton').click(); // Нажал "Войти"


		cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авт. вижу текст
		cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
		cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
	 })


	 it('Неверный логин и верный пароль', function () {
		cy.visit('https://login.qa.studio/'); // Зашли на сайт
		cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки "Вос. пароль"


		cy.get('#mail').type('erman@dolnikov.ru'); // Ввели неверный логин
		cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
		cy.get('#loginButton').click(); // Нажал "Войти"


		cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авт. вижу текст
		cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
		cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
	 })


	 it('Проверка, что в логине есть @', function () {
		cy.visit('https://login.qa.studio/'); // Зашли на сайт
		cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки "Вос. пароль"


		cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без "@"
		cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
		cy.get('#loginButton').click(); // Нажал "Войти"


		cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что после авт. вижу текст
		cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
		cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
	 })

	 it('Проверка на приведение к строчным буквам в логине', function () {
		cy.visit('https://login.qa.studio/'); // Зашли на сайт
		cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки "Вос. пароль"


		cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели логин GerMan@Dolnikov.ru
		cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
		cy.get('#loginButton').click(); // Нажал "Войти"


		cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авт. вижу текст
		cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
		cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
	 })

	 it('Проверка восстановления пароля', function () {
		cy.visit('https://login.qa.studio/'); // Зашли на сайт
		cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки "Вос. пароль"


		cy.get('#forgotEmailButton').click(); // Нажал "Забыли пароль"
		cy.get('#mailForgot').type('german@dolnikov.ru'); // Нашел поле e-mail  Ввел почту для восстановления
		cy.get('#restoreEmailButton').click(); // Нажал "Отправить код"


		cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю на совпадение текст
		cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
		cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
	 })
})


// План
// + Найти поле логин(e-mail) и ввести верный логин
// + Найти поле пароль и ввести верный пароль
// + Найти кнопку "Войти" и нажать на нее
// Проверить, что авторизация прошла успешно