"use client"
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Group, Button, ScrollArea } from '@mantine/core';

export default function DrawScroll() {
   const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Drawer with scroll</p>);

  return (
    <>
      <div>
        <div style={{position: 'absolute', background: 'red', width: 300, height: 500}}><Button onClick={open}>Open drawer</Button></div>
        <Drawer
        style={{position: 'fixed', top: 0, background: '#fff'}}
        opened={opened}
        onClose={close}
        title="Header is sticky"
        scrollAreaComponent={ScrollArea.Autosize}
      >
        {content}
      </Drawer>
      </div>
    </>
  );
}