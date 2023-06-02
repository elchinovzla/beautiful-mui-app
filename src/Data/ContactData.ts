export interface FormValues {
    id: number;
    name?: string;
    role?: string;
    skills: string[];
    startDate?: string;
    preference?: string;
}

const today = new Date();
export const contactData: Array<FormValues> = [
    {id: 1, name: 'Sonny', role: 'Dev', skills:['React', 'Angular', 'Java'], startDate:`${today.getMonth()+1}/${today.getDay()}/${today.getFullYear()}`, preference:'WFH'},
    {id: 2, name: 'Zia', role: 'Dev', skills:['React', 'Redux', 'Java'], startDate:`${today.getMonth()+1}/${today.getDay()}/${today.getFullYear()}`, preference:'Hybrid'},
    {id: 3, name: 'John', role: 'Dev', skills:['React', 'Java', 'SQL'], startDate:`${today.getMonth()+1}/${today.getDay()}/${today.getFullYear()}`, preference:'Hybrid'},
    {id: 4, name: 'Jay', role: 'QA', skills:['Manual testing', 'Selenium'], startDate:`${today.getMonth()+1}/${today.getDay()}/${today.getFullYear()}`, preference:'RTO'}
]