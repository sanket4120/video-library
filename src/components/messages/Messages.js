import { useMessage } from '../../context/messageContext';
import { Message } from './Message';
import './messages.css';

const Messages = () => {
  const { messages } = useMessage();

  return (
    <div className='messages-container'>
      {messages?.length > 0 &&
        messages != null &&
        messages.map((message) => (
          <Message message={message} key={message.id} />
        ))}
    </div>
  );
};

export { Messages };
