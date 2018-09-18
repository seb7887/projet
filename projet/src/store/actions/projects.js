import { apiCall } from '../../api/api';
import { LOAD_PROJECTS, REMOVE_PROJECT } from '../actionTypes';

export const loadProjects = (projects) => ({
  type: LOAD_PROJECTS,
  projects,
})

export const remove = (id) => ({
  type: REMOVE_PROJECT,
  id,
})

export const removeProject = (user_id, project_id) => {
  return (dispatch) => {
    return apiCall('delete', `http://localhost:8081/api/projects/user/${user_id}/project/${project_id}`)
      .then(() => dispatch(remove(project_id)))
      .catch((err) => {})
  }
}

export const fetchProjects = () => {
  return (dispatch) => {
    return apiCall('get', 'http://localhost:8081/api/projects')
      .then((res) => {
        dispatch(loadProjects(res));
      })
      .catch((err) => {})
  }
}

export const postNewProject = (text) => (dispatch, getState) => {
  const { currentUser } = getState();
  const id = currentUser.user.id;
  return apiCall('post', `http://localhost:8081/projects/user/${id}`, { text })
    .then((res) => {})
    .catch((err) => {})
}
