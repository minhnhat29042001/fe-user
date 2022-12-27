import React from 'react';

interface Props {
  type?: string;
  message?: any;
}

const Message = ({ type = 'error', message }: Props) => {
  return (
    <div
      className="px-2 text-base mt-2   text-red-500"
      role="alert">
      {type === 'error' && (
        <div>
          {message}
        </div>
      )}
    </div>
  );
};

export default Message;
