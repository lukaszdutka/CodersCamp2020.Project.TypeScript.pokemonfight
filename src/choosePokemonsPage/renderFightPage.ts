export const renderFightPage = (appDiv: HTMLDivElement) => {
  const fightPage = document.querySelector(
    "#fight-page-template"
  ) as HTMLTemplateElement;
  appDiv.innerHTML = fightPage.innerHTML;
};
