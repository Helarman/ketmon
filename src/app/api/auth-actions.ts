import Cookies from 'js-cookie';
import toast from 'react-hot-toast';


export async function signout() {
  toast.success('Выход выполнен!')
  Cookies.remove('jwt', { path: '/' })
  Cookies.remove('username', { path: '/' })
  window.location.reload()
}

export const getToken = () => {
  return Cookies.get('jwt');
};