import type { schedule } from "../assets/mockData";

export type Props = {
    selectedValue: schedule[];
    index: number
}

export const displayDate = ({selectedValue, index}: Props):String => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        let date: string = '';
            const dateValue = new Date(selectedValue[index].date);
            date = `${days[dateValue.getDay()]}, ${months[dateValue.getMonth()]} ${dateValue.getDate()}, ${dateValue.getFullYear()}`;
    return date
}