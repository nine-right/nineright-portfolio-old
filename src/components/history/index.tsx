import React from 'react'
import styled from 'styled-components';

const HistoryWrapper = styled.div`
   width: 100%;
   position: relative;
   &:before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -1px;
      height: 100%;
      width: 2px;
      background-color: rgba(163, 163, 163, 0.3);
   }
   @media only screen and (max-width: 600px) {
      &:before {
         left: 9px;
         margin-left: 0;
      }
   }
`;

const HistoryColumn = styled.div`
   width: 50%;
   box-sizing: border-box;
   margin-bottom: 40px;
   position: relative;
   
   &:before {
      content: "";
      position: absolute;
      display: block;
      width: 12px;
      height: 12px;
      background-color: white;
      border: 4px solid #003fff;
      border-radius: 50%;
   }
   
   &:nth-child(2n-1) {
      margin-left: 50%;
      padding-left: 50px;
      &:before {
         left: -10px;
      }
   }
   &:nth-child(2n) {
      text-align: right;
      padding-right: 50px;
      &:before {
         right: -10px;
      }
   }

   .date {
      color: #003fff;
      font-weight: 600;
      font-size: 22px;
      margin-bottom: 10px;
   }
   .content {
      font-size: 14px;
      line-height: 1.5;
      color: #0f0f0f;
   }

   @media only screen and (max-width: 600px) {
      width: auto;
      &:nth-child(2n-1) {
         margin-left: 0;
         &:before {
            left: 0;
         }
      }
      &:nth-child(2n) {
         /* text-align: right;
         padding-right: 50px;
         /* &:before {
            right: -10px;
         } */
         text-align: left;
         padding-right: 0;
         padding-left: 50px;
         &:before {
            right: auto;
            left: 0;
         }
      }
   }
`;

const History = () => {
   return (
      <HistoryWrapper>
         <HistoryColumn>
            <div className="date">2022.01</div>
            <div className="content">
               가나다라마바사 가나다라마바사 <br/>
               가나다라마바사 가나다라마바사
            </div>
         </HistoryColumn>
         <HistoryColumn>
            <div className="date">2022.01</div>
            <div className="content">
               가나다라마바사 가나다라마바사 <br/>
               가나다라마바사 가나다라마바사
            </div>
         </HistoryColumn>
         <HistoryColumn>
            <div className="date">2022.01</div>
            <div className="content">
               가나다라마바사 가나다라마바사 <br/>
               가나다라마바사 가나다라마바사
            </div>
         </HistoryColumn>
         <HistoryColumn>
            <div className="date">2022.01</div>
            <div className="content">
               가나다라마바사 가나다라마바사 <br/>
               가나다라마바사 가나다라마바사
            </div>
         </HistoryColumn>
      </HistoryWrapper>
   );
}

export default History;