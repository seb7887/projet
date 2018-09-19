import { apiCall } from '../../api/api';
import { addError } from './errors';
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
      .catch((err) => addError(err.message))
  }
}

export const fetchProjects = () => {
  return (dispatch) => {
    return apiCall('get', 'http://localhost:8081/api/projects')
      .then((res) => {
        dispatch(loadProjects(res));
      })
      .catch((err) => dispatch(addError(err.message)));
  }
}

export const postNewProject = (project) => (dispatch, getState) => {
  const { currentUser } = getState();
  const id = currentUser.user.id;
  return apiCall('post', `http://localhost:8081/api/projects/user/${id}`, project)
    .then((res) => {})
    .catch((err) => addError(err.message))
}
