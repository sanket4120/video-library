import { logout } from '../../actions/userActions';
import { useUser } from '../../context/userContext';
import { useDocumentTitle } from '../../utils/useDocumentTitle';

const Account = () => {
  useDocumentTitle('Account | TechFlix');
  const {
    setAuth,
    authState: { userInfo },
  } = useUser();

  const handleLogout = () => {
    logout(setAuth);
  };

  return (
    <main className='py-6'>
      <div className='flex flex-column align-items-center mb-5'>
        <div className='avatar-lg rounded-full flex align-items-center justify-content-center size-3 mb-3'>
          {userInfo.firstName[0]}
          {userInfo.lastName[0]}
        </div>
        <div className='txt-center mb-3'>
          <p>
            {userInfo.firstName} {userInfo.lastName}
          </p>
          <p className='txt-secondary'>{userInfo.email}</p>
        </div>
        <button className='btn btn-primary' onClick={handleLogout}>
          Logout
        </button>
      </div>
    </main>
  );
};

export { Account };
