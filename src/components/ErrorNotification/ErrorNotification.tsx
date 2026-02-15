import styles from './error-notification.module.scss';
import type {ErrorNotificationProps} from "./ErrorNotificationProps.ts";
import type {FC} from "react";
import {ButtonTryAgain} from "../ButtonTryAgain/ButtonTryAgain.tsx";

export const ErrorNotification: FC<ErrorNotificationProps> = ({
                                                                  message,
                                                                  executeFunction
                                                              }) => {
    return (
        <div className={styles['error-notification']}>
            <h3 className={styles['error-notification__heading']}>Ops!</h3>
            <p className={styles['error-notification__message']}>{message}</p>
            <ButtonTryAgain executeFunction={executeFunction}/>
        </div>
    );
}