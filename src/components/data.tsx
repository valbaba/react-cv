export const languageMap = {
    en: 0,
    fr: 1,
    es: 2,
};
interface LanguageData{
    [key: string]: [en:string, fr: string,es:string]
}
export const data:LanguageData = {
    ['project']: ['Project','Projet', 'Proyecto'],
    ['Skills & Technologies']: ['Skills & Technologies','Compétences & technologies', ' Habilidades & Tecnologías'],
    ['Developer, student and car enthusiast']: ['Developer, student and car enthusiast','Développeur, étudiant et passionné d\'automobile', 'Desarrollador, estudiante y entusiasta del automóvil'],
    ['Apps I\'ve Built']: ['Apps I\'ve Built', 'Mes créations', 'Aplicaciones I\'ve Creado'],
    ['What is better than merging your passions together ?']: ['What is better than merging your passions together ?', 'Quoi de mieux que d’unir vos passions ?', '¿Qué es mejor que unir tus pasiones ?'],
    ['Some of my favorite apps I\'ve built.']: ['Some of my favorite apps I\'ve built.','Certaines de mes applications préférées.','Algunas de mis aplicaciones favoritas que he construido.'],


}