export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';

export const signup = (email, password) => {
  return async dispatch => {
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAdm1Ld9dLYeUovcoElnd9zeHlX7sLI7Rs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      })
    });

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    const redData = await response.json();

    console.log(redData);

    dispatch({ type: SIGNUP, })
  };
};

export const login = (email, password) => {
  return async dispatch => {
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAdm1Ld9dLYeUovcoElnd9zeHlX7sLI7Rs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      })
    });

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    const redData = await response.json();

    console.log(redData);

    dispatch({ type: LOGIN, })
  };
};