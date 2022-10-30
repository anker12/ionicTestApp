import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import TopBar from "../components/TopBar";

const HomeScreen: React.FC  = () => {
    return (
        //@ts-ignore
        <>
            <TopBar title='Home'/>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Card Title</IonCardTitle>
                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                    Here's a small text description for the card content. Nothing more, nothing less.
                </IonCardContent>
            </IonCard>
        </>
    );
}

export default HomeScreen
