import * as React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';

interface Props {
  handleOnSwitchTimerStatus: any;
  handleOnResetTimer: any;
  UIStartButtonText: string;
}

const TimerControlButtons: React.FC<Props> = (props: Props) => {
  const { handleOnSwitchTimerStatus, handleOnResetTimer, UIStartButtonText } = props;

  return (
    <div className="timer-control-buttons">
      <Button type="primary" size="large" onClick={handleOnSwitchTimerStatus}>
        {UIStartButtonText}
      </Button>

      <Button type="primary" size="large" onClick={handleOnResetTimer}>
        Reset
      </Button>
    </div>
  );
};

export default TimerControlButtons;
