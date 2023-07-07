import React from 'react';

export const Success = ({ setSend, invitesLength, setInvites }) => {
  return (
    <div class="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {invitesLength} пользователям отправлено приглашение.</p>
      <button className="send-invite-btn" onClick={() => {setSend(false); setInvites([])}}>Назад</button>
    </div>
  );
};
