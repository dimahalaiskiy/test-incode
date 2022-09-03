import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TickerItem from "./TickerItem/TickerItem";
import { TickerListCon } from "./TickerList.styled";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const TicketList = () => {
	const { tickers } = useSelector((state) => state.tickers);

	const [tickersArray, updateTickerArray] = useState(tickers);

	useEffect(() => {
		updateTickerArray(tickers);
	}, [tickers]);

	const handleOnDragEnd = (result) => {
		if (!result.destination) return;
		const items = Array.from(tickersArray);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);

		updateTickerArray(items);
	};
	return (
		<DragDropContext onDragEnd={handleOnDragEnd}>
			<Droppable droppableId='characters'>
				{(provided) => (
					<TickerListCon {...provided.droppableProps} ref={provided.innerRef}>
						{tickersArray.map((ticker, index) => {
							return (
								<Draggable key={ticker.ticker} draggableId={ticker.ticker} index={index}>
									{(provided) => (
										<div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
											<TickerItem key={ticker.ticker} ticker={ticker} />
										</div>
									)}
								</Draggable>
							);
						})}
						{provided.placeholder}
					</TickerListCon>
				)}
			</Droppable>
		</DragDropContext>
	);
};

export default TicketList;
