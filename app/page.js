import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{flex: 1, justifyContent: "center", display: "flex", padding: 60}}>
      <div style={{justifyContent: "center", display: 'flex', flexDirection: 'column',}}>
        <h1 style={{fontSize: 37, fontWeight: 'bold', marginTop: 20}}> 
        CPRG 306: Web Development 2 - Assignments
        </h1>

        <div style={{fontSize: 19, marginTop: 10}}>
          <ul>
            <li><Link href="/week-2">Week 2 Assignment</Link></li>
            <li><Link href="/week-3">Week 3 Assignment</Link></li>
            <li><Link href="/week-4">Week 4 Assignment (IN PROGESS)</Link></li>
            <li><Link href="/week-5">Week 5 Assignment (N/A)</Link></li>
            <li><Link href="/week-6">Week 6 Assignment (N/A)</Link></li>
            <li><Link href="/week-7">Week 7 Assignment (N/A)</Link></li>
            <li><Link href="/week-8">Week 8 Assignment (N/A)</Link></li>
            <li><Link href="/week-9">Week 9 Assignment (N/A)</Link></li>
            <li><Link href="/week-10">Week 10 Assignment (N/A)</Link></li>
          </ul>
        </div>
      </div>
    </main> 
  );
}
