export const Authenticated = () => {
  const token = localStorage.getItem('token');
  if(token.length > 0 ){
    return true;
  }else{
    return false;
  }
};