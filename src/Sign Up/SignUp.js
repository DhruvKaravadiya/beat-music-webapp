import "./signUpStyles.css";
export default function signUp() {
  return (
    <>
      <div class="signUp-page-body">
        <div class="signUp-card">
          <div class="signUp-head-logo"></div>
          <div class="signUp-body">
            <p class="signUp-card-header ">
              <h1>SIGN UP</h1>
            </p>

            <form class="signUp-card-form">
              <div class="signUp-form-item ">
                <input
                  type="text"
                  placeholder="Enter Username"
                  title="Username must contain alphabets and number"
                  required
                />
              </div>
              <div class="signUp-form-item ">
                <input
                  id="email"
                  type="text"
                  name="email"
                  pattern="[a-zA-Z]{3,}@[a-zA-Z]{3,}[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,}"
                  required
                  placeholder="Enter you Email"
                />
              </div>

              <div class="signUp-form-item ">
                <input type="password" placeholder="Enter Password" required />
              </div>
              <div class="signUp-form-item ">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <div class="signUp-form-item signUp-btn">
                <button type="submit "> Sign Up</button>
              </div>
            </form>
            <div class="signUp-card-footer ">
              Already have and account?<a class="Login">Login</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
