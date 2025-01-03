export interface CreateMeetingRequest {
  token: string | null;
  title: string;
  location?: string;
  startTime: string;
  description?: string;
  estimatedTotalDuration: string;
  imageNum: number;
}

export interface CreateMeetingResponse {
  response: {
    meetingId: number;
    // is_time_exist: true;
    // shareUrl: 'generated_url';}
  };
}

export interface GetMeetingRequest {
  token: string | null;
  meetingId: string;
}

export interface GetMeetingResponse {
  response: {
    meetingId: number;
    title: string;
    description: string;
    meetingStatus: 'SCHEDULED' | 'INPROGRESS' | 'COMPLETED' | 'CANCELED';
    hostMemberId: number;
    startTime: string;
    totalEstimatedDuration: string; // 회의 예상 소요시간
    currentDuration: string; // 회의 실제 소요시간
    imgNum: number;
  };
}

export interface GetMeetingMemberListRequest {
  token: string | null;
  meetingId: string;
}

export interface MeetingMemberResponse {
  memberId: string;
  nickname: string;
  imageNum: number;
}

export interface GetMeetingMemberListResponse {
  response: {
    hostMember: {
      memberId: string;
      nickname: string;
      imageNum: number;
    };
    members: MeetingMemberResponse[];
    host: boolean; // 방장 여부
  };
}

export interface GetAgendaListRequest {
  token: string | null;
  meetingId: string;
}

export interface AgendaResponse {
  agendaId: number;
  title: string;
  type: 'AGENDA' | 'BREAK';
  currentDuration: string;
  remainingDuration: string;
  status: 'PENDING' | 'INPROGRESS' | 'PAUSED' | 'COMPLETED';
}

export interface GetAgendaListResponse {
  response: {
    meetingId: number;
    currentDuration: string; // 현재까지 회의 소요시간
    agendaResponse: AgendaResponse[];
  };
}

export interface AddAgendaRequest {
  token: string | null;
  meetingId: string;
  title: string;
  type: 'AGENDA' | 'BREAK'; // 안건이면 AGENDA, 쉬는시간이면 BREAK
  allocatedDuration: string;
  refetchAgendaList: () => void;
}

export interface AddAgendaResponse {
  response: {
    agendaId: number;
  };
}

export interface DeleteAgendaRequest {
  token: string | null;
  meetingId: string;
  agendaId: string;
  refetchAgendaList: () => void;
}

export interface EditAgendaRequest {
  token: string | null;
  meetingId: string;
  agendaId: number;
  title: string;
  allocatedDuration: string;
  refetchAgendaList: () => void;
}

export interface EditAgendaResponse {
  response: {
    agendaId: number;
    title: string;
    allocatedDuration: string;
  };
}

export interface ReorderAgendaListRequest {
  token: string | null;
  meetingId: string;
  // agendaIds: number[];
}

export interface ReorderAgendaListResponse {
  response: {
    meetingId: number;
    remainingTime: string; // 현재까지 회의 소요시간
    agendaResponse: AgendaResponse[];
  };
}

export interface EndMeetingRequest {
  token: string | null;
  meetingId: string;
}

export interface EndAgendaResponse {
  agendaId: string;
  title: string;
  diff: string;
}

export interface EndMeetingResponse {
  response: {
    report: {
      totalDiff: string;
      agendas: EndAgendaResponse[];
      memos: string; // 작성했던 메모 불러오기 (구현 예정)
    };
  };
}
