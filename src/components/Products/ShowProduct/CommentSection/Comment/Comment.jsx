import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import { Typography, Avatar, Card } from '@material-ui/core';

const Comment = ({ name, message, photoUrl, timestamp }) => {
    const classes = useStyles();
    const [date, setDate] = useState('');
    const newDate = timestamp.toDate().toString().slice(0, 21);

    useEffect(() => {
        if(newDate.includes('Mon')) {
            const russianDate = newDate.replace('Mon', 'Понедельник');
            setDate(russianDate)
        }
        if(newDate.includes('Tue')) {
            const russianDate = newDate.replace('Tue', 'Вторник');
            setDate(russianDate);
        }
        if(newDate.includes('Wed')) {
            const russianDate = newDate.replace('Wed', 'Среда');
            setDate(russianDate);
        }
        if(newDate.includes('Thu')) {
            const russianDate = newDate.replace('Thu', 'Четверг');
            setDate(russianDate);
        }
        if(newDate.includes('Fri')) {
            const russianDate = newDate.replace('Fri', 'Пятница');
            setDate(russianDate);
        }
        if(newDate.includes('Sat')) {
            const russianDate = newDate.replace('Sat', 'Суббота');
            setDate(russianDate);
        }
        if(newDate.includes('Sun')) {
            const russianDate = newDate.replace('Sun', 'Воскресенье');

            setDate(russianDate);
        }

        // Replace all english shortcuts on russian
        if(date.includes('Jan')) {
            const russianDate = date.replace('Jan', 'Январь');
            setDate(russianDate);
        }
        if(date.includes('Feb')) {
            const russianDate = date.replace('Feb', 'Февраль');
            setDate(russianDate);
        }
        if(date.includes('Mar')) {
            const russianDate = date.replace('Mar', 'Март');
            setDate(russianDate);
        }
        if(date.includes('Apr')) {
            const russianDate = date.replace('Apr', 'Апрель');
            setDate(russianDate);
        }
        if(date.includes('May')) {
            const russianDate = date.replace('May', 'Май');
            setDate(russianDate);
        }
        if(date.includes('Jun')) {
            const russianDate = date.replace('Jun', 'Июнь');
            setDate(russianDate);
        }
        if(date.includes('Jul')) {
            const russianDate = date.replace('Jul', 'Июль');
            setDate(russianDate);
        }
        if(date.includes('Aug')) {
            const russianDate = date.replace('Aug', 'Август');
            setDate(russianDate);
        }
        if(date.includes('Sep')) {
            const russianDate = date.replace('Sep', 'Сентябрь');
            setDate(russianDate);
        }
        if(date.includes('Oct')) {
            const russianDate = date.replace('Oct', 'Октябрь');
            setDate(russianDate);
        }
        if(date.includes('Nov')) {
            const russianDate = date.replace('Nov', 'Ноябрь');
            setDate(russianDate);
        }
        if(date.includes('Dec')) {
            const russianDate = date.replace('Dec', 'Декабрь');
            setDate(russianDate);
        }
    }, [])

    return (
        <>
        {message && (
            <Card className={classes.comment}>
                <div className={classes.commentHeader}>
                    <Avatar src={photoUrl}>
                        {name[0]}
                    </Avatar>
                    <Typography className={classes.commentName} variant="h6">{name}</Typography>
                </div>
                <div className={classes.commentBody}>
                    <Typography className={classes.commentMessage} variant="h6">{message}</Typography>
                </div>
                <Typography variant="h6" className={classes.date}>{date}</Typography>
            </Card> 
        )}
        
        </>
    )
}

export default Comment
