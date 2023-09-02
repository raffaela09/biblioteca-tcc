import { Subject } from "rxjs"

export const languages = [
    {
        language: 'Portugues',
        flag: 'br'
    },
    {
        language: 'Ingles',
        flag: 'us'
    }
];
export const notifications =  [
    {
        icon: 'bx bxs-file-pdf',
        subject: 'Visualize o pdf salvo',
        description: 'gjdnfgnd',
    },
    {
        icon: 'bx bx-cloud-upload' ,
        subject: 'Upload finalizado',
        description: 'gjdnfgnd',
    },
    {
        icon: 'bx bx-cloud-download',
        subject: 'Download finalizado',
        description: 'gjdnfgnd',
    },
];

export const userItems = [
    {
    routerlink: 'statistics',
       icon: 'bx bx-user' ,
       label: 'Perfil'
    },
    {
        routerlink: 'settings',
       icon: 'bx bx-cog' ,
       label: 'Config.'
    },
    {
    
       icon: 'bx bx-log-out' ,
       label: 'Sair'
    },
];
