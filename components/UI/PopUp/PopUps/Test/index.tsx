import {ChangeEventHandler, FC} from 'react'
import styles from './Test.module.scss'
import {Checkbox, ImagesPreview, Input, SimpleUploader, Textarea} from '@UI'
import useSendOrderRequestPopUp from '@components/UI/PopUp/PopUps/Test/useTestPopUp'
import {LinkMarkdown} from '@appComponents'
import useTestPopUp from '@components/UI/PopUp/PopUps/Test/useTestPopUp'


export const Test: FC = () => {

    const {

    } = useTestPopUp({})

    return (
        <section
            className={styles.main}
        >

        </section>
    )
}
