import React, {useRef, useState} from 'react'
import moment from 'moment-timezone'
import "moment/locale/ko";
import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko");

export default function DayjsExample() {
  const dayjsDate = dayjs();
  const newDayjstDate = dayjsDate.add(1, "week");
  const cloneNewDayjsDate = newDayjstDate.add(1, "week");
  const birthDatRef = useRef(null);
  const [day, setDay] = useState("");
  const handleBirthDayChange = (event) => {
    setDay(dayjs(event.target.value, "YYYY-MM-DD").format("dddd"))
  }

  return (
    <div>
      <h1>MomentExample</h1>
      <div>Immutable Check</div>
      <div>
        {dayjsDate.format()}
        <br />
        {newDayjstDate.format()}
        <br />
        {cloneNewDayjsDate.format()}
      </div>  
      <br />
      <div>
        Summer Time 
      </div>
      <div>
        2018년 3월 10일 13시에 하루 더하기
        {moment.tz("2023-03-10 13:00:00", "America/New_York").add(1, "day").format()}
      </div>
      <div>
        2018년 3월 10일 13시에 24시간 더하기
        {moment.tz("2023-03-10 13:00:00", "America/New_York").add(24, "hour").format()}
      </div>
      <br />
      <div>한국어로 표기 07-17-2021을 2021년 7월 17일로 표기</div>
      <div>{dayjs("07-17-2021").format("YYYY년 M월 D일")}</div>
      <br />
      <div>자기 생일 요일 찾기</div>
      <div>
        <input type="date" ref={birthDatRef} onChange={handleBirthDayChange} />
        <div>무슨 요일이었을까?</div>
        <div>{day}</div>
      </div>
      <br />
      <div>두 날짜 비교</div>
      <div>2021-07-17 03:00 와 2021-07-18 02:00는 몇시간 차이인가?</div>
      <div>
        {`${dayjs("2021-07-17 03:00").diff(dayjs("2021-07-18 02:00"), "hours")} 시간`}
      </div>

    </div>
  )
}
