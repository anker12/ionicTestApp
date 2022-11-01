import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import TopBar from "../components/TopBar";
import moment from 'moment'

const HomeScreen: React.FC  = () => {
    return (
        <>
            <TopBar title='Home'/>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Storyy</IonCardTitle>
                    <IonCardSubtitle>
                        {moment().format('MMMM Do YYYY, h:mm:ss a')}
                    </IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                    This is a post in a card
                </IonCardContent>
            </IonCard>
        </>
    );
}

export default HomeScreen
