import Header from "../layouts/Header";
import MediumCard from "../UI/MediumCard";
import LoginForm from "../entity/login/loginForm";

function SignIn() {
  // Properties --------------------------------
  // Hooks -------------------------------------
  // Context -----------------------------------
  // Methods -----------------------------------
  const displayLoginForm = <LoginForm />;
  // View --------------------------------------
  return (
    <>
      <div className="centerpane">
        <Header />
        <MediumCard title="Login below" content={displayLoginForm}>
          <LoginForm></LoginForm>
        </MediumCard>
      </div>
    </>
  );
}

export default SignIn;
