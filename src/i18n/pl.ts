const pl = {
  landing: {
    headerMain: 'Zorganizuj swoje plany!',
    headerSecondary: 'wszystko czego potrzebujesz jest w jednym miejscu.',

    signIn: {
      header: 'ZALOGUJ SIĘ',
      email: 'Email',
      password: 'Hasło',
      buttonSignIn: 'Zaloguj się',
      buttonSignUp: 'Rejestracja',
    },

    signUp: {
      header: 'ZAREJESTRUJ SIĘ',
      email: 'Email',
      name: 'Nazwa',
      password: 'Hasło',
      confirmPassword: 'Potwierdź hasło',
      buttonRegister: 'Zarejestruj się',
      buttonSignIn: 'Logowanie',
    },
  },

  home: {
    tasksHeader: {
      headerWithLabel: 'Zadania z etykietą: {{label}}',
      header: 'Wszystkie zadania',
      tasks: 'Zadania',
      finished: 'Zakończone',
    },

    taskAdd: {
      header: 'Dodaj nowe zadanie',
      title: 'Tytuł',
      description: 'Opis',
      label: 'Etykieta',
      button: 'Dodaj zadanie',
    },

    task: {
      finish: 'Zakończ',
      unfinish: 'Cofnij',
      delete: 'Usuń',
      save: 'Zapisz',
      cancel: 'Anuluj',
      close: 'Zamknij',
    },

    taskEdit: {
      header: 'Edytuj Zadanie',
    },

    menu: {
      userInfo: 'Witaj, {{name}}',
    },

    labelMenu: {
      all: 'Wszystkie',
    },
  },

  errors: {
    login: 'Nie udało się zalogować!',
    nameError: 'Nazwa powinna mieć minimum 2 znaki i maksymalnie 60 znaków.',
    emailLengthError: 'Email powinien mieć minimum 10 znaków i maksymalnie 60 znaków.',
    passwordError:
      'Hasło musi mieć od 8 do 20 znaków długości i spełniać kryteria: jeden znak A-Z, jeden a-z i numer lub znak _, -',
    passwordsNotSameError: 'Hasła nie są takie same!',
    signUpError: 'Coś poszło nie tak w trakcie tworzenie twojego konta.',
    somethingWentWrong: 'Coś poszło nie tak!',
  },

  successes: {
    login: 'Logowanie zakończone sukcesem!',
    signUp: 'Rejestracja zakończona sukcesem!',
  },

  notFound: {
    message: 'Chyba się zgubiłeś/aś. Uważamy, że nasza strona domowa jest lepsza.',
    button: 'wroć na start',
  },

  settings: {
    header: 'Ustawienia',
    colorScheme: 'Schemat kolorów:',
    dark: 'Ciemny',
    light: 'Jasny',
  },
};

export { pl };
