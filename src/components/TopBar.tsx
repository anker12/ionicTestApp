import { IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';

type TopBarProps = {
    title: string,
}

const TopBar: React.FC<TopBarProps> = ({
    title
}) => {

  return (
    <IonHeader>
    <IonToolbar>
        <IonButtons slot="start">
        <IonMenuButton />
        </IonButtons>
        <IonTitle>{title}</IonTitle>
    </IonToolbar>
    </IonHeader>
  );
};

export default TopBar;
