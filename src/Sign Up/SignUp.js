import "./signUpStyles.css";
export default function signUp() {
  return (
    <>
      <div class="signUp-page-body">
        <div class="signUp-card">
          <div class="signUp-card-left">
            <div class="signUp-head-icon"></div>
          </div>
          <div class="signUp-card-right">
            <p class="signUp-card-header ">
              <h1>signUp</h1>
            </p>
            
            <form class="signUp-card-form">
              
            <div class="form-item ">
                <span class="form-item-icon material-symbols-outlined">
                  person
                </span>
                <input type="text" placeholder="Enter UserName" required />
              </div>
              <div class="form-item ">
                <span class="form-item-icon material-symbols-outlined">
                  mail
                </span>
                <input
                  type="text"
                  placeholder="Enter Email"
                  required
                  autoFocus
                />
              </div>
              
              <div class="form-item ">
                <span class="form-item-icon material-symbols-outlined">
                  lock_open
                </span>
                <input type="password" placeholder="Enter Password" required />
              </div>
              <div class="form-item ">
                <span class="form-item-icon material-symbols-outlined">
                  lock
                </span>
                <input type="password" placeholder="Confirm Password" required />
              </div>
              
              <div class="form-item ">
                <button type="submit " class="w-50">
                  {" "}
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
