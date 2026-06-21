const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const BASE_URL = 'https://api.github.com';
const profileResult = document.querySelector('.profile-results');


btnSearch.addEventListener('click', async () => {
  const userName = inputSearch.value.trim();

  if (!userName) {
    alert('Por favor, digite um nome do usuário do Github');
    return;
  }

  profileResult.innerHTML = '<div class="loading">Carregando...</div>';
  btnSearch.disabled = true;

  try {
    const response = await fetch(`${BASE_URL}/users/${userName}`);

    if (!response.ok) {
      profileResult.innerHTML = '';
      alert('Usuário não encontrado');
      return;
    }

    const userData = await response.json();
    console.log(userData);

    profileResult.innerHTML = `
      <div class="profile-card">
        <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
        <div class="profile-info">
          <h2>${userData.name}</h2>
          <p>${userData.bio || 'Não possui bio cadastrada 🥲'}</p>
        </div>
      </div>`;
  } catch (error) {
    profileResult.innerHTML = '';
    console.error('Erro ao buscar usuário:', error);
    alert('Ocorreu um erro ao buscar o usuário. Por favor, tente novamente mais tarde.');
  } finally {
    btnSearch.disabled = false;
  }
});
