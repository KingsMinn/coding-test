# [level 1] 카드 뭉치 - 159994 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/159994) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.09 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 09월 03일 23:45:44

### 문제 설명

<p data-afsc-id="76">코니는 영어 단어가 적힌 카드 뭉치 두 개를 선물로 받았습니다. 코니는 다음과 같은 규칙으로 카드에 적힌 단어들을 사용해 원하는 순서의 단어 배열을 만들 수 있는지 알고 싶습니다.</p>

<ul data-afsc-id="77">
<li data-afsc-id="78">원하는 카드 뭉치에서 카드를 순서대로 한 장씩 사용합니다.</li>
<li data-afsc-id="79">한 번 사용한 카드는 다시 사용할 수 없습니다.</li>
<li data-afsc-id="80">카드를 사용하지 않고 다음 카드로 넘어갈 수 없습니다.</li>
<li data-afsc-id="81">기존에 주어진 카드 뭉치의 단어 순서는 바꿀 수 없습니다.</li>
</ul>

<p data-afsc-id="82">예를 들어 첫 번째 카드 뭉치에 순서대로 ["i", "drink", "water"], 두 번째 카드 뭉치에 순서대로 ["want", "to"]가 적혀있을 때 ["i", "want", "to", "drink", "water"] 순서의 단어 배열을 만들려고 한다면 첫 번째 카드 뭉치에서 "i"를 사용한 후 두 번째 카드 뭉치에서 "want"와 "to"를 사용하고 첫 번째 카드뭉치에 "drink"와 "water"를 차례대로 사용하면 원하는 순서의 단어 배열을 만들 수 있습니다.</p>

<p data-afsc-id="83">문자열로 이루어진 배열 <code data-afsc-id="84">cards1</code>, <code data-afsc-id="85">cards2</code>와 원하는 단어 배열&nbsp;<code data-afsc-id="86">goal</code>이 매개변수로 주어질 때, <code data-afsc-id="87">cards1</code>과 <code data-afsc-id="88">cards2</code>에 적힌 단어들로 <code data-afsc-id="89">goal</code>를 만들 있다면 "Yes"를, 만들 수 없다면 "No"를 return하는 solution 함수를 완성해주세요.</p>

<hr data-afsc-id="90">

<h5 data-afsc-id="91">제한사항</h5>

<ul data-afsc-id="92">
<li data-afsc-id="93">1 ≤ <code data-afsc-id="94">cards1</code>의 길이, <code data-afsc-id="95">cards2</code>의 길이 ≤ 10

<ul data-afsc-id="96">
<li data-afsc-id="97">1 ≤ <code data-afsc-id="98">cards1[i]</code>의 길이, <code data-afsc-id="99">cards2[i]</code>의 길이 ≤ 10</li>
<li data-afsc-id="100"><code data-afsc-id="101">cards1</code>과 <code data-afsc-id="102">cards2</code>에는 서로 다른 단어만 존재합니다.</li>
</ul></li>
<li data-afsc-id="103">2 ≤ <code data-afsc-id="104">goal</code>의 길이 ≤ <code data-afsc-id="105">cards1</code>의 길이 + <code data-afsc-id="106">cards2</code>의 길이

<ul data-afsc-id="107">
<li data-afsc-id="108">1 ≤ <code data-afsc-id="109">goal[i]</code>의 길이 ≤ 10</li>
<li data-afsc-id="110"><code data-afsc-id="111">goal</code>의 원소는 <code data-afsc-id="112">cards1</code>과 <code data-afsc-id="113">cards2</code>의 원소들로만 이루어져 있습니다.</li>
</ul></li>
<li data-afsc-id="114"><code data-afsc-id="115">cards1</code>, <code data-afsc-id="116">cards2</code>, <code data-afsc-id="117">goal</code>의 문자열들은 모두 알파벳 소문자로만 이루어져 있습니다.</li>
</ul>

<hr data-afsc-id="118">

<h5 data-afsc-id="119">입출력 예</h5>
<table class="table" data-afsc-id="120">
        <thead data-afsc-id="121"><tr data-afsc-id="122">
<th data-afsc-id="123">cards1</th>
<th data-afsc-id="124">cards2</th>
<th data-afsc-id="125">goal</th>
<th data-afsc-id="126">result</th>
</tr>
</thead>
        <tbody data-afsc-id="127"><tr data-afsc-id="128">
<td data-afsc-id="129">["i", "drink", "water"]</td>
<td data-afsc-id="130">["want", "to"]</td>
<td data-afsc-id="131">["i", "want", "to", "drink", "water"]</td>
<td data-afsc-id="132">"Yes"</td>
</tr>
<tr data-afsc-id="133">
<td data-afsc-id="134">["i", "water", "drink"]</td>
<td data-afsc-id="135">["want", "to"]</td>
<td data-afsc-id="136">["i", "want", "to", "drink", "water"]</td>
<td data-afsc-id="137">"No"</td>
</tr>
</tbody>
      </table>
<hr data-afsc-id="138">

<h5 data-afsc-id="139">입출력 예 설명</h5>

<p data-afsc-id="140">입출력 예 #1</p>

<p data-afsc-id="141">본문과 같습니다.</p>

<p data-afsc-id="142">입출력 예 #2</p>

<p data-afsc-id="143"><code data-afsc-id="144">cards1</code>에서 "i"를 사용하고 <code data-afsc-id="145">cards2</code>에서 "want"와 "to"를 사용하여 "i want to"까지는 만들 수 있지만 "water"가 "drink"보다 먼저 사용되어야 하기 때문에 해당 문장을 완성시킬 수 없습니다. 따라서 "No"를 반환합니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges