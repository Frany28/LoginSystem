document.addEventListener("DOMContentLoaded", () => {
  const enlace = document.getElementById("signUp");
  const contenedor = document.querySelector(".containerFather");

  if (enlace && contenedor) {
    enlace.addEventListener("click", (event) => {
      // Cambiamos el contenido del contenedor principal
      contenedor.innerHTML = `
      <section class="flex justify-center items-center h-full w-full">
        <div class="grid gap-8 w-full max-w-md">
          <section
            id="sign-up"
            class="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl my-3"
          >
            <div
              class="border-8 border-transparent rounded-xl bg-white dark:bg-gray-900 shadow-xl p-8 m-2"
            >
              <div class="titleReg text-center">
                <h1 class="text-3xl font-bold cursor-default dark:text-gray-300 text-gray-900">
                  Sign Up
                </h1>
              </div>
              <form action="#" method="post" class="space-y-6">
                <div>
                  <label for="newUsername" class="block mb-2 text-lg dark:text-gray-300">Username</label>
                  <input
                    id="newUsername"
                    class="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                    type="text"
                    placeholder="Name"
                  />
                  <p class="text-sm text-red-500">Username must be 4 to 16 characters long and must not contain spaces or special characters.</p>
                </div>
                <div>
                  <label for="email" class="block mb-2 text-lg dark:text-gray-300">Email</label>
                  <input
                    id="email"
                    class="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                    type="email"
                    placeholder="Email"
                  />
                  <p class="text-sm text-red-500">Email isn't valid</p>
                </div>
                <div>
                  <label for="newPassword" class="block mb-2 text-lg dark:text-gray-300">Password</label>
                  <input
                    id="newPassword"
                    class="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                    type="password"
                    placeholder="Password"
                  />
                  <p class="text-sm text-red-500">Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.</p>
                </div>
                <div>
                  <label for="confirmPassword" class="block mb-2 text-lg dark:text-gray-300">Confirm Password</label>
                  <input
                    id="confirmPassword"
                    class="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                    type="password"
                    placeholder="Confirm Password"
                  
                  />
                  <p class="text-sm text-red-500">Passwords don't match</p>
                </div>
                <div>
                  <button
                    class="w-full p-3 mt-4 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
              <div class="flex flex-col mt-4 text-sm text-center dark:text-gray-300">
                <p>
                  Already have an account?
                  <a href="#" id="goToLogin" class="text-blue-400 transition hover:underline">Log in</a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
      `;
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  const toggle = document.getElementById("toggle");

  if (document.documentElement.classList.contains("dark")) {
    toggle.checked = true;
  }

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  });
});
