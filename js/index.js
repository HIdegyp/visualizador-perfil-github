import { fetchGithubUser, fetchGithubUserRepos } from './githubApi.js';
import { renderProfile } from './profileView.js';

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

const searchGithubUser = async () => {
  const userName = inputSearch.value.trim();
  if (!userName) return alert('Digite um nome de usuário do GitHub.');

  profileResults.innerHTML = '<p class="loading">Carregando...</p>';

  try {
    const userData = await fetchGithubUser(userName);
    const userRepos = await fetchGithubUserRepos(userName);
    renderProfile(userData, userRepos, profileResults);
  } catch {
    alert('Usuário não encontrado.');
    profileResults.innerHTML = '';
  }
};

btnSearch.addEventListener('click', searchGithubUser);
inputSearch.addEventListener('keydown', (event) => event.key === 'Enter' && searchGithubUser());