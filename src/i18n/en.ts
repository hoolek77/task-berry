// TODO do same structure in pl translation and adjust it in components

const en = {
  landing: {
    headerMain: 'Keep your plans organized!',
    headerSecondary: 'everything that you need in one place.',

    signIn: {
      header: 'SIGN IN',
      email: 'Email',
      password: 'Password',
      buttonSignIn: 'Sign In',
      buttonSignUp: 'Sign Up',
    },

    signUp: {
      header: 'SIGN UP',
      email: 'Email',
      name: 'Name',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      buttonRegister: 'Register',
      buttonSignIn: 'Sign In',
    },
  },

  home: {
    tasksHeader: {
      headerWithLabel: 'Tasks with label: {{label}}',
      header: 'Total Tasks',
      tasks: 'Tasks',
      finished: 'Finished',
    },

    taskAdd: {
      header: 'Add a new task',
      title: 'Title',
      description: 'Description',
      label: 'Label',
      button: 'Add Task',
    },

    task: {
      finish: 'Finish',
      unfinish: 'Unfinish',
      delete: 'Delete',
    },

    menu: {
      userInfo: 'Hi there, {{name}}',
    },

    labelMenu: {
      all: 'All',
    },
  },

  errors: {
    login: 'Unable to login!',
    nameError: 'Name should be minimum 2 characters and maximum 60 characters.',
    emailLengthError: 'Email should be minimum 10 characters and maximum 60 characters.',
    passwordError:
      'Password must be from 8 to 20 symbol length and matches at min: one symbol A-Z, one a-z and number or characters _, -',
    passwordsNotSameError: 'Passwords are not the same!',
    signUpError: 'Something went wrong while creating your account.',
    somethingWentWrong: 'Something went wrong!',
  },

  successes: {
    login: 'Log in successful!',
    signUp: 'Sign up successful!',
  },

  notFound: {
    message: 'You may have gotten lost. We belive our home page is better.',
    button: 'back to home',
  },

  settings: {
    header: 'Settings',
    colorScheme: 'Color Scheme:',
    dark: 'Dark',
    light: 'Light',
  },
};

export { en };
