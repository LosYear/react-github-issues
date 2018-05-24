export const ACTION_CHANGE_REPO = 'ACTION_CHANGE_REPO';
export const ACTION_SET_REPO_NAME = 'ACTION_SET_REPO_NAME';
export const ACTION_SET_ISSUES_COUNT = 'ACTION_SET_ISSUES_COUNT';

/**
 * Задает конкретное имя репозитория, обработчик изменяет состояние
 * @param name имя репо
 * @returns {{type: string, repositoryName: *}}
 */
export function setRepositoryName(name) {
    return {type: ACTION_SET_REPO_NAME, repositoryName: name};
}

/**
 * Сигнализирует об изменении репозитория, обработчик вызовет события изменения состояния и загрузки данных
 * @param name
 * @returns {{type: string, repositoryName: *}}
 */
export function changeRepository(name){
    return {type: ACTION_CHANGE_REPO, repositoryName: name};
}

/**
 * Изменяет количество тикетов
 * @param issuesCount
 * @returns {{type: string, issuesCount: *}}
 */
export function setIssuesCount(issuesCount){
    return {type: ACTION_SET_ISSUES_COUNT, issuesCount: issuesCount};
}