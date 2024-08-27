import React from "react";
import './BlockingModal.scss';

export const BlockingModal: React.FC<BlockingModalProps> = ({on, children}) => {
  return (
      <div className={`full-screen${on ? ' on' : ''}`}>
          <div className={`modal-wrapper`}>
              <div className={`modal-area`}>
                  <div className={`modal-content`}>
                      {children}
                  </div>
              </div>
          </div>
      </div>
  );
};

interface BlockingModalProps {
    on: boolean;
    children: React.ReactNode;
}