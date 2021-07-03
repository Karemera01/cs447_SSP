 differences between process.nextTick and setImmediate

1)process.nextTick are in the nextTick Queue while setImmediate are in Check Queue
2)process.nextTick function callbacks in nextTick Queue have higher priority over function that are in Check Queue
3)they  but process.nextTick are not in the event loop