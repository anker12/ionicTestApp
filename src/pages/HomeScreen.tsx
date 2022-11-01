import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonPage } from "@ionic/react";
import TopBar from "../components/TopBar";
import moment from 'moment'

const HomeScreen: React.FC  = () => {
    return (
        <>
            <IonPage>
                <TopBar title='Home' slot='fixed'/>
                <IonContent>
                    <IonCard >
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
                </IonContent>
            </IonPage>
        </>
    );
}

export default HomeScreen
