const $taskList = document.querySelector('.task-list');
if (!$taskList) throw new Error('The $taskList query Failed');

$taskList.addEventListener('click', (event: Event) => {
  const eventTarget = event.target as HTMLElement;
  console.log(eventTarget);
  console.log(eventTarget.tagName);

  if (eventTarget.tagName === 'BUTTON') {
    const $taskListItem = eventTarget.closest('.task-list-item');
    console.log($taskListItem);
    $taskListItem?.remove();
  }
});
