import Header from "../layouts/Header";
import MediumCard from "../UI/MediumCard";
import LoginForm from "../entity/login/loginForm";

function SignIn() {
  // Properties --------------------------------
  // Hooks -------------------------------------
  // Context -----------------------------------
  // Methods -----------------------------------
  // View --------------------------------------
  return (
    <>
      <div className="centerpane">
        <Header />
        <MediumCard title="Enter Login ID below">
          <LoginForm />
        </MediumCard>
      </div>
    </>
  );
}

export default SignIn;
