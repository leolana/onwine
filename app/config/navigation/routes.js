import {FontIcons} from '../../assets/icons';
import * as Screens from '../../screens/index';
import _ from 'lodash';

export const MainRoutes = [
  {
    id: 'LoginMenu',
    title: 'Autenticação',
    icon: FontIcons.login,
    screen: Screens.LoginMenu,
    children: [
      {
        id: 'Login1',
        title: 'Login',
        screen: Screens.LoginV1,
        children: []
      },
      {
        id: 'SignUp',
        title: 'Inscrever-se',
        screen: Screens.SignUp,
        children: []
      },
      {
        id: 'password',
        title: 'Recuperar senha',
        screen: Screens.PasswordRecovery,
        children: []
      },
    ]
  },
  {
    id: 'SocialMenu',
    title: 'Social',
    icon: FontIcons.profile,
    screen: Screens.SocialMenu,
    children: [
      {
        id: 'ProfileV2',
        title: 'Perfil',
        screen: Screens.ProfileV2,
        children: []
      },
      {
        id: 'ProfileSettings',
        title: 'Configurações do perfil',
        screen: Screens.ProfileSettings,
        children: []
      },
      {
        id: 'Notifications',
        title: 'Notificações',
        screen: Screens.Notifications,
        children: []
      },
      {
        id: 'Contacts',
        title: 'Contatos',
        screen: Screens.Contacts,
        children: []
      },
      {
        id: 'Feed',
        title: 'Vinhos',
        screen: Screens.Feed,
        children: []
      },
    ]
  },
  {
    id: 'ArticlesMenu',
    title: 'Vinhos',
    icon: FontIcons.article,
    screen: Screens.ArticleMenu,
    children: [
      {
        id: 'Articles4',
        title: 'Carta de vinhos',
        screen: Screens.Articles4,
        children: []
      },
      {
        id: 'Recomendacoes',
        title: 'Recomendações',
        screen: Screens.Blogposts,
        children: []
      },
      {
        id: 'Article',
        title: 'Sobre a OnWine',
        screen: Screens.Article,
        children: []
      }
    ]
  },
  {
    id: 'MessagingMenu',
    title: 'Mensagens',
    icon: FontIcons.mail,
    screen: Screens.MessagingMenu,
    children: [
      {
        id: 'ChatList',
        title: 'Chat com o produtor do vinho',
        screen: Screens.ChatList,
        children: []
      },
      {
        id: 'Comments',
        title: 'Comentários',
        screen: Screens.Comments,
        children: []
      },
    ]
  },
  {
    id: 'DashboardsMenu',
    title: 'Dashboards',
    icon: FontIcons.dashboard,
    screen: Screens.DashboardMenu,
    children: [{
      id: 'Dashboard',
      title: 'Dashboard',
      screen: Screens.Dashboard,
      children: []
    },]
  },
  {
    id: 'EcommerceMenu',
    title: 'Ecommerce',
    icon: FontIcons.card,
    screen: Screens.EcommerceMenu,
    children: [
      {
        id: 'Cards',
        title: 'Cartões',
        icon: FontIcons.card,
        screen: Screens.Cards,
        children: []
      },
      {
        id: 'AddToCardForm',
        title: 'Adicionar forma de pagamento',
        icon: FontIcons.addToCardForm,
        screen: Screens.AddToCardForm,
        children: []
      },

    ]
  },
  {
    id: 'NavigationMenu',
    icon: FontIcons.navigation,
    title: 'Navegação',
    screen: Screens.NavigationMenu,
    children: [
      {
        id: 'GridV1',
        title: 'Grid Menu V1',
        screen: Screens.GridV1,
        children: []
      },
      {
        id: 'GridV2',
        title: 'Grid Menu V2',
        screen: Screens.GridV2,
        children: []
      },
      {
        id: 'List',
        title: 'List Menu',
        screen: Screens.ListMenu,
        children: []
      },
      {
        id: 'Side',
        title: 'Side Menu',
        action: 'DrawerOpen',
        screen: Screens.SideMenu,
        children: []
      }
    ]
  },
  {
    id: 'OtherMenu',
    title: 'Outros',
    icon: FontIcons.other,
    screen: Screens.OtherMenu,
    children: [
      {
        id: 'Settings',
        title: 'Configurações',
        screen: Screens.Settings,
        children: []
      }
    ]
  },
  {
    id: 'Themes',
    title: 'Temas',
    icon: FontIcons.theme,
    screen: Screens.Themes,
    children: []
  },
];

let menuRoutes = _.cloneDeep(MainRoutes);
menuRoutes.unshift({
  id: 'Articles4',
  title: 'Start',
  screen: Screens.Articles4,
  children: []
},);

export const MenuRoutes = menuRoutes;