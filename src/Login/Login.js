import './loginStyles.css';
export default function Login() {
  return (
    <>
      <div class="login-page-body">
        <div class="login-card">
            <div class = "head-icon">
            </div>
          <p class="login-card-header "><h1>Login</h1></p>
          <form class="login-card-form">
            <div class="form-item ">
              <span class="form-item-icon material-symbols-outlined">mail</span>
              <input type="text" placeholder="Enter Email" required autoFocus />
            </div>
            <div class="form-item ">
              <span class="form-item-icon material-symbols-outlined">lock</span>
              <input type="password" placeholder="Enter Password" required />
            </div>
            <div class="form-item-other">
              <div class="checkbox">
                <input type="checkbox" id="rememberMeCheckbox" />
                <label for="rememberMeCheckBox">Remember me</label>
              </div>
              <a href="#">Forgot Password?</a>

            </div>
            <div class="form-item ">
              <button type="submit " class="w-50"> Sign In</button>
            </div>
          </form>
          <div class="login-card-footer ">
            Don't have and account?<a href="#">Create a free account</a>
          </div>
          <div class="login-card-social ">
            <div>Other Sign-in platforms</div>
            <div class="login-card-social-btns">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-google"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-facebook"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-spotify"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527"></path>
                  <path d="M9 15c1.5 -1 4 -1 5 .5"></path>
                  <path d="M7 9c2 -1 6 -2 10 .5"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
