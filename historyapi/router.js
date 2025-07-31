const app = document.getElementById('app');

const routes = {
  '/': renderHome,
  '/about': renderAbout,
  '/contact': renderContact,
};

// 페이지 전환 함수
function navigateTo(path) {
  history.pushState({}, '', path);
  render(path);
}

// 주소에 따른 렌더링
function render(path) {
  const renderFn = routes[path] || renderNotFound;
  renderFn();
}

// 페이지별 렌더링 함수들
function renderHome() {
  app.innerHTML = `
    <h2>🏠 Home</h2>
    <p>This is the Home page content rendered by JavaScript.</p>
  `;
}

function renderAbout() {
  app.innerHTML = `
    <h2>📘 About</h2>
    <p>This is the About page content rendered by JavaScript.</p>
  `;
}

function renderContact() {
  app.innerHTML = `
    <h2>✉️ Contact</h2>
    <p>This is the Contact page content rendered by JavaScript.</p>
  `;
}

function renderNotFound() {
  app.innerHTML = `
    <h2>404 Not Found</h2>
    <p>The page you are looking for does not exist.</p>
  `;
}

// 뒤로/앞으로 가기
window.addEventListener('popstate', () => {
  render(location.pathname);
});

// 첫 로딩
window.addEventListener('DOMContentLoaded', () => {
  render(location.pathname);
});
